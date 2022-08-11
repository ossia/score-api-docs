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
    [ "Graphics plug-ins", "_gfx_plugins.html", [
      [ "Creating a custom node", "_gfx_plugins.html#CustomNode", null ],
      [ "Shader conventions", "_gfx_plugins.html#ShaderConventions", null ],
      [ "Video decoders", "_gfx_plugins.html#VideoDecoders", null ]
    ] ],
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
"_c_s_p_coherency_checker_interface_8hpp_source.html",
"_event_execution_8hpp_source.html",
"_mapping_command_factory_8hpp_source.html",
"_q_graphics_int_slider_8hpp_source.html",
"_subtype_variant_8hpp_source.html",
"class_audio_inlet.html#aec43a6bc9b152c36269e8aab4f505b88",
"class_curve_1_1_create_point_command_object.html#a3f230fe01503f6d133688cd13d57b3ac",
"class_curve_1_1_segment_model.html#a210e460f4db3858dbe034d9de5b484df",
"class_data_stream_reader.html#a8d7ebf7d4be0df498218f5b457edbc6b",
"class_dataflow_1_1_audio_device.html#a02d065336b5e63abc2a3caed545946bd",
"class_device_1_1_device_list.html#acd5044bc888e04d128ab4e2c28fddab4",
"class_execution_1_1_interval_component_base.html",
"class_explorer_1_1_address_list_settings_widget.html#ac83c6fc59d36e9b3972fb9a51d1c6162",
"class_explorer_1_1_node_update_proxy.html",
"class_gfx_1_1_gfx_output_device.html#a70729d3f678028f672ca5e11cfe81c68",
"class_gfx_1_1_window_device.html#ab3509b9db476a3919f2ff22e3c9ad9a3",
"class_id_container_3_01_element_00_01_model_00_01std_1_1enable__if__t_3_9std_1_1is__base__of_3_0398040744b894784cbf4c6c5f48e82f4.html#a8e616ee3f3ad82ff805146359f31a6ad",
"class_j_s_o_n_reader.html#a2cff151a528d238957fe271356d77c10",
"class_j_s_o_n_writer.html#ab31fc7ba71f1140d56e93100079a2c1a",
"class_local_tree_1_1_interval_base.html",
"class_media_1_1_step_1_1_item.html",
"class_mixer_1_1_mixer_panel.html#ad6c31610eff12744df28e83db7649d5f",
"class_patternist_1_1_presenter.html#af1f364246d9873c0756f4acefaa52b52",
"class_process_1_1_default_footer_delegate.html#ac107b2443c7caf4a9efbd31e4b168df8",
"class_process_1_1_magnetism_adjuster.html#aff5c102962f1e51c209001dca7ace84d",
"class_process_1_1_process_model.html#abd7405544056186d5421de3773159ded",
"class_protocols_1_1_m_i_d_i_output_protocol_factory.html#adfa1f574b5c205da7289a19eb7e38ef9",
"class_remote_control_1_1_process_component_factory___t.html",
"class_scenario_1_1_command_1_1_change_element_color.html",
"class_scenario_1_1_command_1_1_move_base_event.html#ac62f15a50ba9d975cc7ef78e20ec9b3b",
"class_scenario_1_1_command_1_1_split_event.html",
"class_scenario_1_1_edition_grid.html#a8189f509a172826a0391ef1beeee4513",
"class_scenario_1_1_interval_durations.html#ab26833c1ebd6dd92938e941eba4d9811",
"class_scenario_1_1_interval_view.html#abe9fcdff56e32ee11ca857cd5e3e160a",
"class_scenario_1_1_musical_grid.html#aa9f49f0b3966fd50716eeca1f0fca4b0",
"class_scenario_1_1_scenario_document_view.html#a003ad881da3ecce629f8f595b27b7ff9",
"class_scenario_1_1_slot_header.html#a9026ec40ecca44d71d60b776885b44a6",
"class_scenario_1_1_time_sync_model.html#a1f05f04631baf9814601ca7a85641068",
"class_spline3_d_1_1_process_model.html#a114b871b9f37e133cffbbeef008b7e51",
"class_toggle.html",
"class_vec3f_value_type.html#a2122de7dc81f338a783c372644681580",
"classossia_1_1nodes_1_1audio__metronome.html#a092cfca76f18ab28ee8aa82d239987de",
"classscore_1_1_component_hierarchy_manager.html#a5df7cdc03b8d0ecbaf137c93a9dfb10b",
"classscore_1_1_factory_list___qt_interface.html",
"classscore_1_1_interface_list_base.html#a2a2023a01129f93c068aa9da3942921a",
"classscore_1_1_q_graphics_enum.html#a9b911116c4d819e5422353c77b67c4e6",
"classscore_1_1_selection_stack.html#af2bf7c5bc8b0eff30cb8b598d0606190",
"classscore_1_1_undo_application_plugin.html#af1d0d030fb09c84623b3eb7869cb505c",
"classscore_1_1gfx_1_1_render_list.html#af6b0114789dc5aa29351866fb724fa95",
"classvst3_1_1_create_control.html#aa8daa2821b050e439e76c73ad49a4554",
"functions_b.html",
"score-plugin-scenario_2_scenario_2_document_2_metatypes_8hpp_source.html",
"struct_control_1_1_combo_box.html#a4b9004ccfbe4482a7c3c6238fb570ac8",
"struct_control_surface_1_1_node_observer.html#a6b47b4d719bdb4e140dd6421425ce9e4",
"struct_engine_1_1score__to__ossia_1_1_curve_traits.html",
"struct_faust_1_1_update_u_i.html#aa9d7c83076b5b14776466ac6adfc93aa",
"struct_j_s_o_n_reader_1_1assigner.html#aacdc45b055effbf6b00010df675d915e",
"struct_l_v2_1_1on__start.html",
"struct_media_1_1_sound_1_1_waveform_computer_impl_1_1_size_infos.html#af8bb4948bded1f3e7f8442d0fa9814d4",
"struct_nodes_1_1_math_audio_filter_1_1_node_1_1_state.html",
"struct_pd_1_1_ui_wrapper.html#a18d67b2316887b2dbf6c0559e00c5aed",
"struct_process_1_1_style.html#acea60232fe51c3b400135cca068ec25f",
"struct_q_meta_type_id_3_01_scenario_1_1_scenario_record_init_data_01_4.html",
"struct_scenario_1_1_address_accessor_curve_creator.html#a9ea6c3f4dd8de90518756faba680918c",
"struct_scenario_1_1_saved_port.html",
"struct_state_1_1_destination_qualifiers.html#a9cdb9c87a5aa0158ca5fb041886acb95",
"struct_time_val.html#a59b047afd944c332d1cffb8242d1404f",
"structoscr_1_1_deserializer.html#aa70ffb4e06d5e7cfd8f9a98af19fb018",
"structscore_1_1_application_context.html#ae9a5fb08fd24f276c868a77d7e6465be",
"structscore_1_1_loaded_plugin_versions.html",
"structscore_1_1_string_constants.html#a9f38f90c8835392fde27b4943da2d9eb",
"structscore_1_1gfx_1_1_packed_rect_decoder.html#ada72ecd5c089561387e8da4c2c070459",
"structscore_1_1indirect__map__iterator.html#ac9f5ef6bfff1e9836d511895e3219cb6"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';