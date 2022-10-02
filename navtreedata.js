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
"_boost_variant2_serialization_8hpp_source.html",
"_entity_serialization_8hpp_source.html",
"_magnetism_adjuster_8hpp_source.html",
"_protocol_list_8hpp_source.html",
"_state_menu_overlay_8hpp_source.html",
"class_audio_1_1_settings_1_1_view.html",
"class_curve_1_1_command_object_base.html#a15470ca80349e777bb72e6a0b4e588b9",
"class_curve_1_1_segment_factory.html#af20bc40deb46801a8b46011b407f981a",
"class_data_stream_reader.html#a6c67db2f5b256bfcd7317e7b680fd33e",
"class_data_stream_writer.html#af932b4c91dee61ae4ddeff38bc3d3fa1",
"class_device_1_1_device_interface.html#ae61dde47293b30a2709bc094b56e285c",
"class_execution_1_1_interval_component_base.html#ac7cc2d2ef691fafb93dff3fc4fa9a982",
"class_explorer_1_1_address_settings_widget.html#a335c7346df52caf70487b9c0d853cb48",
"class_explorer_1_1_node_update_proxy.html#ad8b7120287b3ab49c220dbc93d40c292",
"class_gfx_1_1_gfx_output_device.html#a3b0a0da0b1abdd0d902d8e2d8a0859db",
"class_gfx_1_1_video_1_1_model.html#a94842300382c36d1509146b8cd77b2eb",
"class_id_container_3_01_element_00_01_model_00_01std_1_1enable__if__t_3_9std_1_1is__base__of_3_0398040744b894784cbf4c6c5f48e82f4.html#a1af11fb76d3b0fd5b07de1f735789049",
"class_j_s_1_1_process_model.html#ac93c589717466d74333e9c3212fd1986",
"class_j_s_o_n_writer.html#a4d7e0b97040394e4e800c0eb26e9277a",
"class_library_1_1_recursive_filter_proxy.html#a50676aa2245702c107296060e62cd6e3",
"class_media_1_1_sndfile_decoder.html",
"class_midi_1_1_view.html#a29e50dc74e49ca26316ccf6801f53414",
"class_p_m_1_1_packages_model.html#aae829ce86fd893438a50bf5c05232237",
"class_process_1_1_cable.html#a2b6560412b20533e8b89a450e0aa6bc3",
"class_process_1_1_layer_factory_list.html",
"class_process_1_1_process_factory___t.html#a27e2022fc692305c9881d6c54e319d73",
"class_protocols_1_1_leapmotion_protocol_settings_widget.html#a05703dc70192f57151c6f9d9f4dc1bf4",
"class_recording_1_1_automation_recorder.html#a19421cb430dc50779cdaac89a822c81f",
"class_scenario_1_1_clickable_label_item.html#a986da3322b40719fa55e3df83c24452d",
"class_scenario_1_1_command_1_1_macro.html#a1f73597f53df167b5bd6091e0e0e0a97",
"class_scenario_1_1_command_1_1_serializable_move_event.html#a2dcae9c126610bd2427fe2175611a894",
"class_scenario_1_1_displayed_elements_tool_palette_factory.html",
"class_scenario_1_1_ghost_interval_drop_handler.html#adbc45b77b266d547d1255db1b8f897e6",
"class_scenario_1_1_interval_presenter.html#aefb7b10c7b9ed722b38b5d31a3b3ad2a",
"class_scenario_1_1_minimap.html#aef5fd6a290d1e4b5e4aaa52676568c6c",
"class_scenario_1_1_scenario_displayed_elements_tool_palette.html",
"class_scenario_1_1_settings_1_1_theme_dialog.html#a3739db970265ecc3a8e5e42b40279f96",
"class_scenario_1_1_temporal_interval_presenter.html#ad76d339181db2ce6f3a07ff499e82e3e",
"class_script.html#a616569793d06a02b0e99a4fb14a3a299",
"class_state_1_1_numeric_value_set_dialog.html#a23b63d8738a6c5bcf80399eed955df4f",
"class_tree_node_3_01_state_1_1_expr_data_01_4.html#ac8cafc610ec07f4496cb73f3ff404d59",
"classfoo.html#aeab88b50de43c5f1b2ca4d23d927fa2b",
"classscore_1_1_command_stack.html#a2102a026e08a4e5b8712f7e3bc49c4d7",
"classscore_1_1_empty_rect_item.html#ab6e958aac4b97b09e03a34e0259c699e",
"classscore_1_1_indirect_container.html#ae0cebde1abc93300b735e3f213fe97a4",
"classscore_1_1_presenter.html#a3d7bdf8f32847d499981796fcca3c996",
"classscore_1_1_q_graphics_selectable_pixmap_toggle.html#ab8c3f725cdd1f2c036b448a85ad89112",
"classscore_1_1_simple_text_item.html#ab718ad404ae4a5e0055d9dde275af5de",
"classscore_1_1_zoom_item.html#a94bc17116c0367b5110c0727cc2332d0",
"classscore_1_1gfx_1_1_window.html#a0c5699c5c4707e9eca42bb067f2e52e1",
"classvst3_1_1_v_s_t_graphics_slider.html#adb48b189409b752428a0524ef4b92531",
"lv2__atom__helpers_8hpp_source.html",
"score__plugin__scenario_8hpp_source.html",
"struct_control_1_1_float_display.html#a525e41b74263797ee81761fd59b5b649",
"struct_curve_1_1_style.html#a97e52865aef68eebf675eb78ba450be0",
"struct_execution_1_1_recompute_propagate.html",
"struct_gfx_1_1_kinect2_1_1kinect2__camera.html#afbf0b840e65e8168b21a8fc65f280452",
"struct_jit_1_1_exception.html#a5a9cc74682f828f79b078b152303b23e",
"struct_local_tree_1_1_set_property_wrapper.html",
"struct_midi_1_1_midi_style.html#a7365edc1312294ec20f67fd62628a59c",
"struct_nodes_1_1_math_generator_1_1_node_1_1_state.html#ab8875635f114ed4525b9d54b62e10184",
"struct_process_1_1_control_setup.html#a20cf97ff1ab576747d5c504cc5356062",
"struct_protocols_1_1_fixture_database_1_1_scan.html#ac815fe8f651e19a94be9735711c8abfe",
"struct_q_meta_type_id_3_01ossia_1_1exec__state__facade_01_4.html#ae8bea68f998cabe4c9c1371a85a330fdacdfa7479afb21436c8a38edadb88d69f",
"struct_scenario_1_1_categorized_addresses.html#a5bcca91286116db4ff5d830d8974565e",
"struct_scenario_1_1_slot_id.html#a02ac1fdd5a1662b1edad32648a1fe30e",
"struct_state_1_1_relation.html#a21e3a646aff8cf67a35983ee8fa801eb",
"struct_ui_1_1_signal_display_1_1_node_1_1_layer.html#aed2dee8ba38d451ae197494bacc28a0f",
"structoscr_1_1_layout_builder.html",
"structscore_1_1_application_components_data.html#a2992c79ae28e74ea1e890c7af4ae4154",
"structscore_1_1_g_u_i_application_context.html#a7bbc38f0979fc6495b6645b5b79af018",
"structscore_1_1_string_constants.html#a6c5243c13b699324a339f126c47bc8d8",
"structscore_1_1gfx_1_1_images_node_1_1_u_b_o.html#a178b3b5542bfe1551cf2a116c44af9d5",
"structscore_1_1gfx_1_1_y_u_v420_decoder.html#aafc7d9516ab7ace78dff0dbe56038afc",
"structvst3_1_1_port_creation_visitor.html#a1e6d98ce78cdb0cf1e7ad075822559ce"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';