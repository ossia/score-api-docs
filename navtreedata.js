/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "score", "index.html", [
    [ "Coding Style", "_coding_style.html", [
      [ "General philosophy", "_coding_style.html#Philosophy", null ],
      [ "Qt versus Modern C++", "_coding_style.html#Qt", null ],
      [ "Inheritance", "_coding_style.html#Inheritance", null ],
      [ "Passing values", "_coding_style.html#Values", null ],
      [ "Templates", "_coding_style.html#Templates", null ]
    ] ],
    [ "Commands", "_commands.html", [
      [ "Creating a command", "_commands.html#CreatingCommand", null ],
      [ "Launching commands", "_commands.html#LaunchingCommands", null ],
      [ "Special commands", "_commands.html#SpecialCommands", [
        [ "Command dispatchers", "_commands.html#Dispatchers", null ]
      ] ]
    ] ],
    [ "Contexts", "_contexts.html", null ],
    [ "Data models", "_models.html", [
      [ "Organization", "_models.html#Organization", null ],
      [ "Identification of objects", "_models.html#IdentificationObjects", [
        [ "Identifiers", "_models.html#Identifiers", null ],
        [ "Paths", "_models.html#Paths", null ]
      ] ],
      [ "Creating models", "_models.html#CreatingModels", null ],
      [ "Relationship to Qt's item models", "_models.html#ItemModel", null ],
      [ "Tree models for simple objects", "_models.html#SimpleObjectsModel", null ]
    ] ],
    [ "Model-View-Presenter separation", "_model_view_presenter.html", null ],
    [ "Plug-ins, factories and interfaces", "_plugins_factories_and_interfaces.html", [
      [ "Anatomy of a plug-in", "_plugins_factories_and_interfaces.html#Anatomy", null ],
      [ "Adding a new component", "_plugins_factories_and_interfaces.html#NewClass", null ],
      [ "Declaring a new interface", "_plugins_factories_and_interfaces.html#NewInterface", null ],
      [ "Add-on manager", "_plugins_factories_and_interfaces.html#AddonManager", null ]
    ] ],
    [ "Useful score interfaces", "_score_interfaces.html", null ],
    [ "Serialization", "_serialization.html", [
      [ "Generalities on serialization", "_serialization.html#GenSer", null ],
      [ "DataStream serialization", "_serialization.html#DataStreamSer", null ],
      [ "JSON serialization", "_serialization.html#JSONObjSer", [
        [ "For deserializing", "_serialization.html#ObjDeser", [
          [ "In DataStream", "_serialization.html#DSObjDeser", null ],
          [ "In JSON", "_serialization.html#JSObjDeser", null ]
        ] ],
        [ "Serialization of polymorphic types", "_serialization.html#PolySer", null ],
        [ "Serialization examples", "_serialization.html#SerExamples", null ]
      ] ]
    ] ],
    [ "State Machines", "_state_machines.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
".html",
"_clip_mode_8hpp_source.html",
"_expression_editor_widget_8hpp_source.html",
"_minuit_protocol_settings_widget_8hpp_source.html",
"_scenario_creation_state_8hpp_source.html",
"_visitor_interface_8hpp_source.html",
"class_base_scenario_presenter.html#ac0bb611061cbeefd53d3a6e32070de23",
"class_curve_1_1_model.html#a0c5a09981c9f4a4d0862df3c320417a2",
"class_curve_1_1_tool_palette.html#ab806e8e872b6431c77dec9a091f3ea43",
"class_data_stream_writer.html#a7287534d33aca07d621a15abe9baa4e1",
"class_device_1_1_address_accessor_edit_widget.html#af4e43ef05267e612cde179c583ccb2b1",
"class_execution_1_1_document_plugin.html#a943049e69bd228a948b99a3c73ed37a1",
"class_execution_1_1_transport_interface_list.html",
"class_explorer_1_1_device_explorer_filter_proxy_model.html#acd3dd944dbfc7b62e0d882d6c802cd5e",
"class_gfx_1_1_filter_1_1_model.html#a2c4d4406cdcb8e00a711f05cd1e130a6",
"class_gfx_1_1kinect2__decoder.html#af90612f9e25a27542220a2488c4a1799",
"class_interp_state_1_1_view.html#a6b8dfd13974942ac1826e23fe76cd688",
"class_j_s_o_n_reader.html#ab99c0078d9ec8975e6e8f8497cccdb91",
"class_library_1_1_process_widget.html#a2f6218a4dc02634a87b170d1392c6eb8",
"class_media_1_1_settings_1_1_model.html#a831c000f8768512055314f7805580aa1",
"class_midi_1_1_replace_notes.html#afc065ab8a0ac5b09413b0e6c28fc5451",
"class_opaque_string.html#a414c6bbeaeaa47a5e76dc53ee04e3b56",
"class_process_1_1_cable.html#a49052fb96990263d1ae3f85f961bcde9",
"class_process_1_1_layer_presenter.html#a569562954e1aeab337af9e50544d5567",
"class_process_1_1_process_model.html#a9d68041553afe98c0d8e7eba65815d0a",
"class_protocols_1_1_o_s_c_query_device.html#afddf29a67171983c4c0af2cbb0299dea",
"class_scenario_1_1_base_element_context.html#a965ea138a85f5e5b5abd4ca53ab6782a",
"class_scenario_1_1_command_1_1_create_interpolation_from_states.html#a7e24be883c3f0b720a3b94999da1ac67",
"class_scenario_1_1_command_1_1_move_event_on_creation_meta.html#adc12249a8322424984f32d0e3dfdc6cc",
"class_scenario_1_1_command_1_1_split_whole_sync.html#ad35410f53858580c9289f0ed9f8963fe",
"class_scenario_1_1_enable_when_scenario_interface_instant_object.html",
"class_scenario_1_1_interval_header.html#a66e12451ec601dca074a3ff61cc89939",
"class_scenario_1_1_item_type.html#ae2f99877ab3f1f28c0bd48aedacd172ea6b18326c69b22898ce7f3cc48ea12927",
"class_scenario_1_1_object_item_model.html",
"class_scenario_1_1_scenario_interface.html#a6e7f50423ab9800f20ac7f014bbac581",
"class_scenario_1_1_state_model.html",
"class_scenario_1_1_time_sync_summary_widget.html",
"class_spline_1_1_curve_item.html#a8eb3344a94cd3586d53b693d98f3b8de",
"class_token_request_value_type.html#afa8713564f5e63de648a59ce529e6441",
"class_web_socket_view.html#a8fecf04a110ae7f1c6f903e8f9b8e3fa",
"classscore_1_1_command_stack.html#a533857aecea4322a4e647eb54d1100aa",
"classscore_1_1_entity_list.html#ac1c3ed0bc88bec5276d8a2e37398e181",
"classscore_1_1_log_messages_item_model.html#a421c99777736b2b39d29e75c6c1de214",
"classscore_1_1_q_graphics_knob.html#a72e7746425c37eb80c2ba783980dfce2",
"classscore_1_1_settings_view.html",
"classscore_1_1_zoom_item.html#a94bc17116c0367b5110c0727cc2332d0",
"classvst3_1_1param__queue.html#a01d089778973465d985f88afe1c6333c",
"namespacemembers_eval.html",
"struct_color_node.html#a00ab769fe3a3f096d384e45779a543a8",
"struct_control_1_1setup___impl1.html",
"struct_empty_decoder.html#af1db5decc633173af465d6014cac6e67",
"struct_gfx_1_1_image.html#a3ceacce4747f45d4dc25167d00dd334d",
"struct_j_s_o_n_reader_1_1assigner.html#a467a2306a6544e407d39cf34d19cdba9",
"struct_local_tree_1_1_property_wrapper.html",
"struct_midi_1_1_midi_style.html#a29d59aeac066eedd40324bed009b876c",
"struct_nodes_1_1_pulse_to_note_1_1_node.html#a0cf7e037e837ae8104422dec7885d7cd",
"struct_process_1_1_log_float_slider.html#a91fd2ed4543d2fabed644ba156475d85",
"struct_protocols_1_1_o_s_c_specific_settings.html#aa41952fc4b9597254466ef68e8acb947",
"struct_recording_1_1_box.html#aab18663f6165896706ac1cf7c6827657",
"struct_scenario_1_1_click_on_slot_handle___event.html#afcbf16c0b521f0e665d088ea5a22263e",
"struct_scenario_1_1_start_date_comparator.html",
"struct_std_variant_data_stream_serializer.html#acc4f4a15d2c2c980aba128ae37a394e3",
"struct_value_message.html#ab226c0c5e19ba79587a05f6e84050c11",
"structscore_1_1_addon.html#ab673b0b100e90a1dc4c8875c02ffe6f4",
"structscore_1_1_hierarchical_member.html",
"structscore_1_1_string_constants.html#aa8127745f1cbbe724a6bd36362a13d4b",
"structvisitor__default__tag.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';